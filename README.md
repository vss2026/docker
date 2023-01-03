# docker

### 도커 이미지, 컨테이너 정의

 - 컨테이너는 코드와 모든 종속성을 패키지화하여 응용 프로그램이 한 컴퓨팅 환경에서 다른 컴퓨팅 환경으로 빠르고 안정적으로 실행되도록 하는 소프트웨어 표준 단위
   또는 간단하고 편리하게 프로그램을 실행시켜주는 것으로 정의

- **컨테이너 이미지** 는 코드, 런타임, 시스템 도구, 시스템 라이브러리 및 설정과 같은 응용 프로그램을 실행하는 데 필요한 모든 것을 포함하는 실행가능한 소프트웨어 패키지
    런타임에 컨테이너가 되고 도커 컨테이너의 경우 도커 엔진에서 실행될 때 이미지가 컨테이너가 된다.

- container 확인 docker ps
    * Container ID: 컨테이너의 고유한 아이디 해쉬값
    * Image: 컨테이너 생성시 사용한 도커 이미지
    * Command: 컨테이너 시작시 실행될 명령어.
    * Created: 컨테이너 생성시간
    * Status: 컨테이너의 상태 실행중: Up, 종료: Exited, 일시정지: Pause
    * Ports: 컨테이너가 개방한 포트와 호스트에 연결한 포트
    * Names: 컨테이너의 고유한 이름, 지정하지 않은경우 자동설정, 이름변경 가능 - docker rename original-name changed-name
- container 중지 docker stop {id}, docker kill {id}
- container 삭제 docker rm {id}, docker rm ``docker ps -a -q``
- image 삭제 docker rmi <이미지 id>
- container, image, network 삭제 - docker system prune
