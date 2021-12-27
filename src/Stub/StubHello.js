import {gql, useMutation} from "@apollo/react-hooks";
import {Button, Input} from "@material-ui/core";
import {useState} from "react";

const signupMutation = gql`
  mutation ($id: ID!, $firstName: String!) {
    createPersonWithId(id: $id, firstName: $firstName) {
      id
      firstName
    }
  }
`;

const StubHello = () => {
    const [signup] = useMutation(signupMutation);
    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    console.log("Id : " + id + " Name : " + name);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("handleSubmit");
        signup({ variables: { id: id, firstName: name } });

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create a person</h1>
                <div>
                    <label>Id</label>
                    <Input
                        type="number"
                        placeholder="Id"
                        value={id}
                        required
                        onChange={({target: {value}}) => setId(value)}/>
                </div>
                <div>
                    <label>First Name</label>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={name}
                        required
                        onChange={({target: {value}}) => setName(value)}/>
                </div>
                <div>
                    <Button type="submit">Create</Button>
                </div>
            </form>
        </>
    )
}

export default StubHello;