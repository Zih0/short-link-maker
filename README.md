# 숏링크 만들기

요즘 숏링크, 딥링크에 대해 배우면서 숏링크 제작하는 API를 구현해봤습니다.

1. 줄이고 싶은 url을 POST로 보낸다.
2. shortid 라이브러리를 활용해 해당 url에 대한 id를 생성하고, db에 기존 url, 줄인 url을 저장한다.
3. 줄인 url로 접속 시, db에서 확인 후 있으면 redirect!


# Demo 
![화면 기록 2021-11-20 오후 3 31 54](https://user-images.githubusercontent.com/60956392/142717074-61ac696e-305e-4ff2-8808-62d6a30f393e.gif)
