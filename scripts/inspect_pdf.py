import sys
import fitz

doc = fitz.open(sys.argv[1])
page = doc[0]
print("PAGE", page.rect)
for w in page.get_text("words"):
    x0, y0, x1, y1, text, b, l, n = w
    print(f"{y0:7.1f} {x0:7.1f} {x1:7.1f}  b{b} l{l}  {text!r}")
