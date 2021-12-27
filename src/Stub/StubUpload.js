import {gql, useMutation, useQuery} from "@apollo/react-hooks";
import "./style.css";

const updateAvatarMutation = gql`
  mutation update($file: Upload!) {
    update(file: $file) {
        avatar,
        firstName
    }
  }
`;

const personQuery = gql`
query ($id: ID!) {
  person(id: $id) {
    avatar
  }
}
`;

const StubUpload = () => {
    const personId = 1;
    const [update, {data: updateData}] = useMutation(updateAvatarMutation,
        {
            onCompleted:data => console.log(data)
        });
    const {data: {person: {avatar} = {}} = {}} = useQuery(personQuery, {variables: {id: parseInt(personId)}, pollInterval: 500,});
    const isUpdated = updateData != null && updateData.avatar != null;

    const uploadFile = event => {
        const file = event.target.files[0]
        if(!file) {
            console.log("Error. File don't loaded");
            return
        }
        else {
            console.log("Success. File loaded");
        }
        update({ variables: { file: file } });
    }

    return (
        <>
            <div>
                <label htmlFor="files" className="btn">Select Image</label>
                <input id="files" className="void" type="file" onChange={uploadFile} />
                {!isUpdated && avatar != null} = > {avatar}
                <img src={avatar} alt="avatar"/>
            </div>
        </>
    )
}

export default StubUpload;