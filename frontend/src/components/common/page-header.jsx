import React from 'react';

const PageHeader = ({ children }) => { //takes the children from all the components that uses 'PageHeader'
    return (
        <React.Fragment>
            <br />
            <div className="row mt-5">
                <div className="col-12 mt-4">
                    <h1 className="display-4">{children}</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PageHeader;