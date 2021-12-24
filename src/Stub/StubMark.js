import { Typography } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';


const StubMark = () => {
    const hist = useHistory();
    const location = useLocation();

    return (
        <div>
            Mark
            <h1>About</h1>
            <button onClick={() => hist.goBack()}>Go Back</button>
            <button onClick={() => hist.push("/a")}>Next</button>
            <Typography color="primary">
                location.pathname = "{location.pathname}"
                <br/>
                location.search = "{location.search}"
                <br/>
                param = "{new URLSearchParams(location.search).get("param")}"
            </Typography>
        </div>
    )
}

export default StubMark;