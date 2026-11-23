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
                                value={this.props.currentPerson.FirstName}
                                placeholder="First Name"
                                name="FirstName"
                                className="form-control"
                            />
                        </div>

                        <div className="col">
                            <input
                                onChange={this.props.onPersonChange}
                                type="text"
                                value={this.props.currentPerson.LastName}
                                placeholder="Last Name"
                                name="LastName"
                                className="form-control"
                            />
                        </div>

                        <div className="col">
                            <input
                                onChange={this.props.onPersonChange}
                                type="text"
                                value={this.props.currentPerson.Age}
                                placeholder="Age"
                                name="Age"
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