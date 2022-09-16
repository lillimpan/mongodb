import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import * as database from '$lib/database'

let registered = false;


export const load: PageServerLoad = ()  => {
    return {
        registered,
    };
}

export const actions: Actions = {
	register: async ({ request, locals, cookies }) => {
		const req = await request.formData();

		const username = req.get("username")
		const password = req.get ("password")
		const repeat_password = req.get ("repeat_password")
	
		const client = await database.connect();
		const db = client.db("test"); 
		const collection = db.collection("users");
	
		registered = true;
	
		// function newPage() {
		//     registered = true; 
		//     link
		// }
		
		
		if (req) {
			collection.insertOne({ "username": "Max", "password": "Ebalo" })
		}   
		
		
		const body = { "register - post": "123" }
	
	},
};
