import requests
import pandas as pd
from bs4 import BeautifulSoup

headers= {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'  }
url='https://www.zara.com/us/en/woman-dresses-l1066.html?v1=2113500&regionGroupId=1&page={page}'
r=requests.get(url,headers=headers)
soup=BeautifulSoup(r.content,'lxml')
name=soup.find_all('h3')
price=soup.find_all('span',class_='money-amount__main')