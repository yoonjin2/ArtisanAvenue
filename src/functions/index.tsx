import { OkPacket } from "mysql2"
import { ProductType } from '@/interfaces';


export class UserRepository {
  static readAll(): Promise<ProductType[]> {
    return new Promise((resolve, reject) => {
      connection.query<ProductType[]>("SELECT * from aartisan", (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  static readById(user_id: number): Promise<ProductType | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<ProductType[]>(
        "SELECT * from aartisan WHERE id = ?",
        [user_id],
        (err, res) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      )
    })
  }

  static create(user: ProductType): Promise<ProductType> {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO aartisan values(?,?,?,?,?,?,?,?)",
        [user.id],
        (err, res) => {
          if (err) reject(err)
          else
            this.readById(res.insertId)
              .then(user => resolve(user!))
              .catch(reject)
        }
      )
    })
  }

  static update(user: ProductType): Promise<ProductType | undefined> {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE aartisan rate = ?, count = ?, quantity = ? WHERE id = ?",
        [user.email, user.rate, user.count, user.quantity, user.id],
        (err, res) => {
          if (err) reject(err)
          else
            this.readById(user.id!)
              .then(resolve)
              .catch(reject)
        }
      )
    })
  }
}
