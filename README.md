# apollo-server sample

## ref

https://www.apollographql.com/docs/apollo-server/getting-started

## start server

npm run start

## out url

http://localhost:4000/graphql

## migrate
npx prisma migrate dev

## seed
remove `"type": "module",` from package.json
https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension

(run after migrate)
npx prisma db seed

## ref. PostgreSQL setup(for Win)

winget install -e --id PostgreSQL.PostgreSQL
https://winget.run/pkg/PostgreSQL/PostgreSQL

add system env
C:\Program Files\PostgreSQL\14\bin\

psql -U postgres
postgres
https://medium.com/@itayperry91/get-started-with-postgresql-on-windows-a-juniors-life-4adfa6dd10e

npx prisma migrate dev
(no need createdb command because `prisma migrate dev` create db (ref.) like  createdb -U postgres mydb)
