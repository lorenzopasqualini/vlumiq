import { db } from "@/db";
import { postsTable, usersTable } from "@/db/schema";

export default async function Home() {
  const data= await db.query.usersTable.findMany();
  
  return (
    <div>
      <form action={async()=>{
        'use server';
        await db.insert(usersTable).values({
          id: 1,
          age: 22,
          email: 'pasqlini@gmail.com',
          name: 'lorenzo'
        });
        await db.insert(postsTable).values({
          title: 'blog title',
          content: 'blog content',
          userId: 1
        })
      }}>
        <button>Send</button>
      </form>

      {data.map((data) =>(
        <div key={data.id}>
          <p>{data.email}</p>
          <p>{data.name}</p>
          <p>{data.age}</p>
        </div>
      ))}
    </div>
  );
}