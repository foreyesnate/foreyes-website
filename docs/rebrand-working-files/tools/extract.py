import sys, os, re, html
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.out=[]; s.skip=0; s.links=set(); s.imgs=[]; s.title=''; s.intitle=False; s.meta={}
    def handle_starttag(s,t,a):
        a=dict(a)
        if t in('script','style','noscript','svg'): s.skip+=1
        if t=='title': s.intitle=True
        if t=='meta' and (a.get('name') in('description',) or a.get('property') in('og:title','og:description','og:image')):
            s.meta[a.get('name') or a.get('property')]=a.get('content','')
        if t=='a' and a.get('href'): s.links.add(a['href']); s.out.append('[LINK→%s] '%a['href'])
        if t=='img': s.imgs.append((a.get('alt',''),a.get('src','')[:200])); s.out.append('\n[IMG alt="%s"]\n'%a.get('alt',''))
        if t in('h1','h2','h3','h4','h5','h6'): s.out.append('\n\n'+'#'*int(t[1])+' ')
        if t in('p','div','section','li','br','tr','header','footer','nav','button','details','summary'): s.out.append('\n')
        if t=='li': s.out.append('- ')
        if t=='button': s.out.append('[BUTTON] ')
        if t in('input','textarea','select'): s.out.append('\n[FIELD %s name=%s placeholder=%s]\n'%(t,a.get('name'),a.get('placeholder')))
    def handle_endtag(s,t):
        if t in('script','style','noscript','svg'): s.skip=max(0,s.skip-1)
        if t=='title': s.intitle=False
    def handle_data(s,d):
        if s.intitle: s.title+=d
        if not s.skip and d.strip(): s.out.append(d)
src,dst=sys.argv[1],sys.argv[2]
os.makedirs(dst,exist_ok=True)
alllinks=set()
for fn in sorted(os.listdir(src)):
    raw=open(os.path.join(src,fn),encoding='utf-8',errors='replace').read()
    p=P(); p.feed(raw)
    txt=''.join(p.out); txt=re.sub(r'[ \t]+',' ',txt); txt=re.sub(r'\n\s*\n+','\n\n',txt)
    hdr='TITLE: %s\nMETA: %s\n\nIMAGES:\n%s\n\n=====\n'%(p.title,p.meta,'\n'.join('- %s | %s'%i for i in p.imgs))
    open(os.path.join(dst,fn.replace('.html','.txt')),'w').write(hdr+txt)
    alllinks|=p.links
open(os.path.join(dst,'_links.txt'),'w').write('\n'.join(sorted(alllinks)))
