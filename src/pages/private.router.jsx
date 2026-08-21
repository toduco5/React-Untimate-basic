import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRouter = (props) => {
    const { user } = useContext(AuthContext);
    if (user && user.id) {
        return (
            <>{props.children}</>
        )
    } else {
        // return (
        //     <Navigate to='/login' replace />
        // )
        return (
            <div id="error-page">
                <Result
                    status="403"
                    title="Unauthorize!"
                    subTitle={`You need login`}
                    extra={<Button type="primary"> <Link to="/"><span>Back To Home</span></Link></Button>}
                />
            </div>
        );
    }
}

export default PrivateRouter