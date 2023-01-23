# ADR

## TODO
- Business Plan
    * [Here](https://docs.google.com/document/d/1S72845pZGyclrTRb85v2Txmkf-BqpxTv88_YpDJjSlM/edit#)
- Business Logic
    * Define timeline: release data?
    * Define scope: core features?
    * Define delegation
- [DONE] DB migration
- [DONE] React integration
- Case handling
   case_change boolean
   event table or queue?
   eventual consistency, extentabilty
   event is text: reference by case_id
- multi-media attachments
## FrontEend
- React
- [mui components](https://mui.com/)

## Backend
- Rails: fast and compact

## Storage
- PostgreSQL
- Multimedia: Distributed file system, e.g Ceph, S3
- Migrate to Non-SQL [Read this](https://www.mongodb.com/docs/mongoid/7.1/tutorials/getting-started-rails/#install-rails)

Decision:
- SQL
    - UUID as key to avoid duplicate entries
    - Transfer information by Case between students and professors
