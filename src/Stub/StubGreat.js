import {gql, useMutation} from "@apollo/react-hooks";
import {useState} from "react";
import {Button, Input, TextField} from "@material-ui/core";

const signupMutation = gql`
  mutation ($firstName: String!) {
    createPerson(firstName: $firstName) {
      firstName
    }
  }
`;

const StubGreat = () => {
    const [signup] = useMutation(signupMutation);
    const [name, setName] = useState("NON");

    console.log(name);

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    signup({ variables: { firstName: name } });
                }}
            >
                <TextField
                    onChange={event => {
                        setName(event.target.value)
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default StubGreat;