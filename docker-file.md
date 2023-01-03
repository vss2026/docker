### 도커 파일(Docker file) 이란?
* 도커 이미지를 만들기 위한 설정파일
* 컨테이너가 어떻게 동장해야 하는지에 대한 설정들을 정의해 줌

### 만드는 순서 (도커 이미지가 필요한 것이 무엇인가를 생각)

1. 베이스 이미지를 명시해준다. (파일 스냅샷에 해당)
2. 추가적으로 필요한 파일을 다운 받기 위한 몇가지 명령어를 명시 (파일 스냅샷에 해당)
3. 컨테이너 시작시 실행 될 명령어를 명시해준다. (시작시 실행 될 명령어에 해당)

###### 베이스 이미지 - 이미지의 기반이 되는 부분 ex) centos, ubuntu, alpine

- MAINTAINER
    * 메인테이너 정보 (작성자 정보)
- FROM
    * 이미지 생성시 기반이 되는 이미지 레이어 <이미지 이름><태그> 형식으로 지정
    * 태그를 안붙이면 자동적으로 최신을 다운
- RUN
    * 도커 이미지가 생성되기 전에 수행될 쉘 명령어
- CMD
    * 컨테이너가 시작되었을 때 실행할 실행 파일 또는 쉘 스크립트.
    * 해당 명령어는 DockerFile 1회만 쓸 수 있다.
- EXPOSE
    * 호스트와 연결할 포트 번호를 설정한다.
- ENV
    * 환경변수 설정
- ADD
    * 파일 / 디렉터리 추가
- COPY
    * 파일 복사
- ENTRYPOINT
    * container가 시작 되었을 때 스크립트 실행
- VOLUME
    * 볼륨 마운트
- USER
    * 명령 실행할 사용자 권한 지정
- WORKDIR
    * container 내부 작업 영역 명시
- ARG
    * Dockerfile 내부 변수
- SHELL
    * default shell 지정

[# reference](https://docs.docker.com/engine/reference/builder/)