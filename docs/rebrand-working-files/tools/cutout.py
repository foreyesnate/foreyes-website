"""Turn an illustration drawn on a flat stone background into a transparent
cut-out: flood-fill the background in from the image edges, then soften the
mask edge by a pixel so the inked outlines stay clean.

usage: python3 -I cutout.py in.png out.webp [max_width]
"""
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageChops

src, dst = sys.argv[1], sys.argv[2]
max_w = int(sys.argv[3]) if len(sys.argv) > 3 else 1600
no_crop = len(sys.argv) > 4 and sys.argv[4] == "nocrop"
im = Image.open(src).convert("RGB")
w, h = im.size
work = im.copy()
SENT = (255, 0, 255)
step = max(8, w // 160)
seeds = [(x, y) for x in range(0, w, step) for y in (0, h - 1)] + \
        [(x, y) for y in range(0, h, step) for x in (0, w - 1)]
bg = im.getpixel((2, 2))
for s in seeds:
    p = work.getpixel(s)
    if p == SENT:
        continue
    # only seed from pixels that look like the background colour
    if max(abs(p[i] - bg[i]) for i in range(3)) <= 14:
        ImageDraw.floodfill(work, s, SENT, thresh=22)
r, g, b = work.split()
mask = Image.eval(ImageChops.multiply(ImageChops.multiply(r.point(lambda v: 255 if v == 255 else 0),
                                                           g.point(lambda v: 255 if v == 0 else 0)),
                                      b.point(lambda v: 255 if v == 255 else 0)), lambda v: v)
alpha = ImageChops.invert(mask)
alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.1))
out = im.convert("RGBA")
out.putalpha(alpha)
box = alpha.point(lambda v: 255 if v > 8 else 0).getbbox()
if box and not no_crop:
    pad = int(0.03 * max(w, h))
    box = (max(0, box[0] - pad), max(0, box[1] - pad), min(w, box[2] + pad), min(h, box[3] + pad))
    out = out.crop(box)
if out.size[0] > max_w:
    out = out.resize((max_w, round(out.size[1] * max_w / out.size[0])), Image.LANCZOS)
out.save(dst, "WEBP", quality=88, method=6)
print(dst, out.size)
