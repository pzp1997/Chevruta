from urllib2 import urlopen
from json import loads

def main():
    text = loads(urlopen('http://www.sefaria.org/api/texts/Numbers.1.1-54').read())['he']
    for i in range(len(text)):
        print "<span class='passuk'>"
        for word in text[i].split():
            print "<a class='word' role='button' data-toggle='popover'>{}</a>".format(word.encode('utf-8'))
        print "</span>"

if __name__ == '__main__':
    main()
