# Node_postgres_using_docker
 Connect a Nodejs app to Postgres using Docker

You must have a version of Docker installed 

## Pull this repositories
Running **docker-compose up --build**

## Open Postman

### URL : http://localhost:8081/getUsers

to see all the users that exist in the table `user` in the Postgres

![16 06 2024_19 07 02_REC](https://github.com/dzois-ar/Node_postgres_using_docker/assets/80916754/726ebf72-b2f3-4dc6-a623-eb330083270f)



### URL : http://localhost:8081/getQrcodeInfo
add new qrcode in table  `qrcode` in the Postgres

![16 06 2024_19 07 51_REC](https://github.com/dzois-ar/Node_postgres_using_docker/assets/80916754/44520ce1-b72e-498f-8ec4-1b81909f5a66)

### URL : http://localhost:8081/getUsers

to see all the users that exist in the table `qrcode` in the Postgres

![16 06 2024_19 07 51_REC](https://github.com/dzois-ar/Node_postgres_using_docker/assets/80916754/44520ce1-b72e-498f-8ec4-1b81909f5a66)



### URL : http://localhost:8081/users

add new user in table  `users` in the Postgres



![16 06 2024_19 14 48_REC](https://github.com/dzois-ar/Node_postgres_using_docker/assets/80916754/e2ab99bc-b290-41fe-8399-00b79463f418)



### URL : http://localhost:8081/deleteUsers

delete  user in table  `users` in the Postgres


![16 06 2024_19 18 11_REC](https://github.com/dzois-ar/Node_postgres_using_docker/assets/80916754/dea08c77-bb3f-43bc-8a2e-3d9ea5a632c1)


### URL : http://localhost:8081/inQrCode

add a new QR code to the 'qrcode' table


![16 06 2024_19 19 08_REC](https://github.com/dzois-ar/Node_postgres_using_docker/assets/80916754/1c618e3f-72a9-4a7d-b8e8-fc1e99bed571)



