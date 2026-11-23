import React from "react";

class PersonForm extends React.Component {
    render() {
        return <>
            <div className="card bg-dark text-white shadow border-0">
                <div className="card-body">
                    <div className="row g-2 align-items-center">
                        <div className="col">
                            <input
                                onChange={this.props.onPersonChange}
                                type="text"
                                value={this.props.currentPerson.firstName}
                                placeholder="First Name"
                                name="firstName"
                                className="form-control"
                            />
                        </div>

                        <div className="col">
                            <input
                                onChange={this.props.onPersonChange}
                                type="text"
                                value={this.props.currentPerson.lastName}
                                placeholder="Last Name"
                                name="lastName"
                                className="form-control"
                            />
                        </div>

                        <div className="col">
                            <input
                                onChange={this.props.onPersonChange}
                                type="text"
                                value={this.props.currentPerson.age}
                                placeholder="Age"
                                name="age"
                                className="form-control"
                            />
                        </div>

                        <div className="col-auto">
                            <button
                                onClick={this.props.onAddClick}
                                className="btn btn-light">
                                Add
                            </button>
                        </div>

                        <div className="col-auto">
                            <button
                                onClick={this.props.onClearClick}
                                className="btn btn-danger">
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default PersonForm;