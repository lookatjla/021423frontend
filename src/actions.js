import url from "./url";
import { redirect } from "react-router-dom";

// CREATE
export async function CreateAction({ request }) {
    // get the form data
    const formData = await request.formData()

    // construct new todo
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route in backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
    // redirect back to the index page
    return redirect("/")
}

// UPDATE
export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData()

    // construct new todo
    const updatedTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route in backend
    await fetch(url + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })
    // redirect back to the index page
    return redirect("/")
}


// DELETE
export async function DeleteAction({ params }) {
    // Get the ID
    const id = params.id
    // send the request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })
    // redirect
    return redirect("/")
}