import {    randomUUID  } from "node:crypto";
import {    sql     } from "./db.js";

export class DatabaseMYSQL      {

    async list(search) {
        let Videos;

        if (search) {
            [Videos] = await sql.execute(
                'SELECT * FROM Videos WHERE tittle LIKE ?'
                    [`%${search}%`]
            );
        }   else {
            [Videos] = await sql.execute('SELECT * FROM Videos');
        }

        return Videos;
    }

    async update(id, Videos) {
        const videoId = randomUUID ();
        const { tittle, description, duration } = Videos;

        await sql.execute (
            'INSERT INTO  Videos (id, tittle, description, duration) VALUES (? , ?, ?, ?)',
            [videoId, tittle, description, duration]
        );
    }

    async update (id, videos) {
        const { tittle, description, duration } = Videos
        await sql.execute(
            'UPDATE videos SET tittle = ?, description = ?, duration = ? WHERE id = ?',
            [tittle, description, duration, id]
        );
    }
    async delete(id) {
        await sql.execute('DELETE FROM videos WHERE id = ?', [id]);
    }
}