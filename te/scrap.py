import requests
from bs4 import BeautifulSoup

url = "https://www.gov.uk/search/news-and-communications"
fichier=open("j.csv","w")
fichier.write("grosses fesses")
fichier.close()
page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')
# Voir le code html source
print(soup.title)
# print(page.content) 
l=0