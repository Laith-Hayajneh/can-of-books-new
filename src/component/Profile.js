import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        console.log(user);
        return (


            <>
            {!isAuthenticated && <p>You are not logged in</p>}
                {isAuthenticated &&
                    <>

                        <div>Hello {user.name}</div>;
                        <h3>email :{user.email}</h3>

                    </>
                }
            </>

        )
    }
}

export default withAuth0(Profile);