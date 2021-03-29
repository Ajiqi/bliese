import mysql.connector

print("DBConnector...")

mydb = mysql.connector.connect(
  host="::1",
  user="root",
  password="bliease123",
  database="sql_store"
)

mycursor = mydb.cursor()

sql = """
INSERT INTO orders
VALUES (
	DEFAULT,
    '10',
    '2021-03-30',
    '1',
    'Kasturi',
    '2021-03-31',
    '1'
)
"""
mycursor.execute(sql)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

mydb.close()