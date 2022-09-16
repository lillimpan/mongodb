import { invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import * as database from '$lib/database'

export const actions: Actions = {
	login: async ({ request, locals, cookies }) => {
		const form = await request.formData();

		const username = form.get("username")
		const password = form.get ("password")

		const client = await database.connect();
		const db = client.db("test"); 
		const collection = db.collection("users");

		// let result = await collection.findOne({"username": form.get.username}, (err, res)=>{
		// 	if(err) throw err;
		// 	if (res){
		// 		console.log("U-Name Exist")
		// 	};
		// });

		

		// TODO: Implement login
		// Check if password and username
		// exists and is correct


		cookies.set('userid', 'secret', {
			path: '/',
			httpOnly: true, // optional for now
			sameSite: 'strict',// optional for now
			secure: process.env.NODE_ENV === 'production',// optional for now
			maxAge: 120 //
		})

		throw redirect(302, '/')

	},
};
