### docker compose
* 다중 컨테이너 도커 애플리케이션을 정의하고 실행하기 위한 도구

~~~yaml
version: '3.7' # version 명시

services: # service 정의
  frontend: # service name
    build: # build image
      context: ../frontend # image 경로 지정
      dockerfile: Dockerfile.dev # Dockerfile 명
    volumes: # volume 설정
      - /app/node_modules
      - ../frontend:/app # local path:container path
    stdin_open: true # react 버그로 인한 추가
    depends_on:
      - nginx # 의존성 명시 -> nginx가 먼저 실행 된 후 실행

  nginx:
    restart: always # 재시작 옵션 no, always, on-failure, unless-stopped
    build: 
      dockerfile: Dockerfile
      context: ../nginx
    ports:
      - "3000:80" # port 지정

  backend:
    build: 
      dockerfile: Dockerfile.dev
      context: ../server
    container_name: app_backend # container name 명시
    volumes:
      - /app/node_modules
      - ../server:/app
    depends_on:
      - nginx # 의존성 명시 -> nginx가 먼저 실행 된 후 실행

  mysql:
    build: ../mysql
    restart: unless-stopped
    container_name: app_mysql
    ports:
      - "3306:3306"
    volumes:
      - ../mysql/mysql_data:/var/lib/mysql
      - ../mysql/sql/:/docker-entrypoint-initdb.d/
    environment: # 환경변수 지정
      - MYSQL_ROOT_PASSWORD=tiger # key=value
      - MYSQL_DATABASE=myapp

~~~


##### command

|command|description|option|
|:---|:---:|:---:|
|up|컨테이너 생성/시작|--build(dockerFile build), -d (백그라운드 실행),  --scale containerA=10 --scale (개수 지정)containerB=20|
|ps|컨테이너 목록 표시|-q(container id 만 출력)|
|logs|컨테이너 로그 출력| -f (watching) |
|run|컨테이너 실행|
|start|컨테이너 시작|
|stop|컨테이너 정지| containerA (특정 container만 조작)|
|restart|컨테이너 재시작|
|pause|컨테이너 일시 정지|
|unpause|컨테이너 재개|
|port|공개 포트 표시|
|config|구성 확인|
|kill|실행 중인 컨테이너 강제 정지|
|rm|컨테이너 삭제|
|down|리소스 삭제|--rmi all (모든 이미지 삭제), --rmi local(커스텀 태그가 없는 이미지만 삭제), -v, --volumes(Compose 정의 파일의 데이터 볼륨을 삭제)|

[# reference](https://docs.docker.com/compose/compose-file/compose-file-v3/)