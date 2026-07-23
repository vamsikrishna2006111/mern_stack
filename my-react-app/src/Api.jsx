import { useState, useEffect } from "react";
import axios from "axios";

function API() {
    const API = "https://jsonplaceholder.typicode.com/users";

    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        try {
            const response = await axios.get(API);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function adduser() {
        if (name == "" || email == "") {
            return;
        }

        try {
            const response = await axios.post(API, { name, email });

            setUser([...user, response.data]);
            setName("");
            setEmail("");

            alert("user added successfully");
        } catch (error) {
            console.log(error);
        }
    }

    async function Updateuser(id) {
        try {
            const response = await axios.put(`${API}/${id}`, {
                name: "Saritha",
                Email: "saritha.j987@gmail.com",
            });

            setUser(
                user.map((user) =>
                    user.id == id ? response.data : user
                )
            );
        } catch (error) {
            console.log(error);
        }
    }

    async function dateleuser(id) {
        try {
            await axios.delete(`${API}/${id}`);

            setUser(
                user.filter((user) => user.id != id)
            );

            alert("user deleted");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <h1>React CRUD operations</h1>

                <label>
                    <b>Name:</b>
                </label>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>
                    <b>Email:</b>
                </label>

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <button onClick={adduser}>
                    Add
                </button>

                <br />

                {user.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            margin: "20px",
                            border: "2px solid brown",
                        }}
                    >
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default API;