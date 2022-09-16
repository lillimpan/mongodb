
<link href="https://fonts.googleapis.com/css?family=Albert Sans" rel="stylesheet" type="text/css">
<script lang="ts">
    import { prefetch } from "$app/navigation";
    import { error } from "@sveltejs/kit";
	import type {PageData} from "./$types";
	export let data: PageData;

	let password:string|null;
	
	let repeat:string|null;

	let username:string|null;

	let same = true

	


	// let num1: number > 5;
	// let num2: number = 15;
	// let username:string;

	// if (username<num1){
	// 	same = false
	// }

</script>

<body>
	<h1>Registration status: {data.registered?"Registered":"Not registerd"}</h1>

<!-- <h1>Welcome Emil Lindberg's resturant guide </h1>
<h2>Become a Member to take part in our professional analyses</h2> -->

<!-- <h2>
    {state.number}
</h2> -->



<form on:submit={(event)=>{
	if(repeat!=password){
		event.preventDefault()
		same = false
	} else if (username!.length < 5 && username!.length > 15) {
		event.preventDefault()
		same_username = false
	} else  {
		same = true
	}
}





} method="POST" action="?/register">
    <div class="login_container">
        <div>
            <h3>
                Registrera Dig
            </h3>
        </div>
        
            <div class="form-group">
                <label for="username"></label>
                <input bind:value={username} class="username" class:notsame={!same_username} type="text" placeholder="Användarnamn" name="username" pattern=".[a-z]&#123;5,15&#125"  title="Användarnamnet måste innehålla mellan 5 och 15 symboler." required>
                <h6>5-15 Karaktärer</h6>
            </div>
                

            <div class="form-group">
                <label for="password"></label>
                <input bind:value={password}  class="password" type="text" placeholder="Lösenord" name="password" id="password" pattern=".&#123;8,999&#125;" title="För svagt lösenord" required>
                <h6>Minst 8 Karaktärer</h6>
            </div>
            
            
            <div>
                <label for="repeat_password"></label>
                <input bind:value={repeat} class="repeat_password" class:notsame={!same} type="text" placeholder="Upprepa Lösenord" name="repeat_password" id="repeat" pattern=".&#123;8,999&#125;" title="Ange samma lösenord" required>
			</div>
			
            
            <div>    
                <button  class="login" type="submit">Skapa Konto</button>
                <div class="change_method">
                    <h6>Har du redan ett konto? <a href="./">Logga in</a></h6>
                </div>
            </div>

    </div>

</form>
</body>
    

  <!-- <h2>In cooperation with <a href="http://www.frendohornefors.se/358689432">www.horneforsvagkrog.se</a> & <a href="https://spinato.se/">www.resturangspinato.se</a></h2> -->

<style>
    :global(body){
        background-color: rgb(95, 3, 95);
        text-align: center;
    }

	input.repeat_password.notsame {
		background-color: red;
	}

    h1{
        color: white;
        font-family: "Albert Sans";
    }


    h3 {
        color: white;
        font-size: 170%;
        font-family: "Albert Sans";
    }

    h6 {
        color: white;
        font-family: "Albert Sans";
        text-align:start;
        padding-left: 40px;
        margin-top: 3px;
        margin-bottom: 6px;

    }

    a {
        color: lightblue;
    }

    .username{
        background-color: white;
        height: 40px;
        width: 300px;
        border: none;
        border-radius: 10px;
        outline: none;
        width:80%;
    }

    .password{
        background-color: white;
        height: 40px;
        width:80%;
        border: none;
        border-radius: 10px;
        outline: none;
    }

    .repeat_password{
        background-color: white;
        height: 40px;
        width:80%;
        border: none;
        border-radius: 10px;
        margin-bottom: 18px;
        outline: none;
    }

    .login {
        background-color: rgb(101, 101, 101);
        height: 40px;
        width: 80%;
        border: none;
        border-radius: 10px;
        font-size: 120%;
        font-family: "Albert Sans";
        color: rgb(255, 255, 255);
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
        font-weight: bold;
    }

    .login:hover{
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
    }

    input {
        font-size: 120%;
        font-family: "Albert Sans";

    }

    

    .login_container {
        text-align: center;
        background-color: rgb(101, 101, 101);
        margin-left: 40%;
        width: 20%;
        padding-top: 5px;
        padding-bottom: 30px;
        border-radius: 40px;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
        align-items: center;
        margin-top: 10%;
    }

    div.change_method {
        margin-left: 17.5%;
        margin-top: 4%;

    }

    /* .form-group:has(input) input {
        border: 3px solid blue;
    }

    :root {
        --valid: green;
        --invalid: red;
        --focus: yellow;
    } */
    
    /* @media (max-width: 850px) {
        h1 {
            font-size: 150%;
        }
    }
    @media (max-width: 620px) {
        h1 {
            font-size: 100%;
        }
    }

    @media (max-width: 850px) {
        h2 {
            font-size: 110%;
        }
    }
    @media (max-width: 620px) {
        h2 {
            font-size: 70%;
        }
    } */

    @media (max-width: 1200px) {
        div.change_method {
            margin-left: 7%;
        }
    }
    
    @media (max-width: 1200px) {
        .login_container {
            width: 30%;
            margin-left: 35%;
        }
    }

    @media (max-width: 1200px) {
        .login_container {
            width: 30%;
            margin-left: 35%;
        }
    }

    @media (max-width: 800px) {
        .login_container {
            width: 50%;
            margin-left: 25%;
        }
    }

    @media (max-width: 600px) {
        .login_container {
            width: 50%;
            margin-left: 25%;
        }
    }

    @media (max-width: 450px) {
        .login_container {
            width: 70%;
            margin-left: 15%;
        }
    }

    @media (max-width: 450px) {
        .login_container {
            width: 70%;
            margin-left: 15%;
        }
    }

    @media (max-width: 300px) {
        .login_container {
            width: 80%;
            margin-left: 10%;
        }
    }

</style>
