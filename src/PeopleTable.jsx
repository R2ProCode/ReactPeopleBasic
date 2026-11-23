import React from "react";
import PersonForm from "./PersonForm";
import PersonRow from "./PersonRow";

class PeopleTable extends React.Component {

    state = {
        people: [],
        currentPerson: {
            FirstName: "",
            LastName: "",
            Age: ""
        }
    }

    onPersonChange = (e) => {

        this.setState({
            currentPerson: {
                ...this.state.currentPerson,
                [e.target.name]: e.target.value
            }
        });
    };

    onAddClick = () => {
        const copy = [...this.state.people];
        copy.push({
            person: {
                FirstName: this.state.currentPerson.FirstName,
                LastName: this.state.currentPerson.LastName,
                Age: this.state.currentPerson.Age
            }
        });

        this.setState({
            people: copy,
            currentPerson: {
                FirstName: "",
                LastName: "",
                Age: ""
            }
        });
    }

    onClearClick = () => {
        this.setState({
            people: [],
            currentPerson: {
                FirstName: "",
                LastName: "",
                Age: ""
            }
        });
    }

    render() {
        return <>
            <div className="container mt-5">
                <PersonForm
                    currentPerson={this.state.currentPerson}
                    onPersonChange={this.onPersonChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />
                {this.state.people.length === 0 ?
                    (<div className="mt-2">
                        <h1>No people yet, be the first to add...!</h1>
                    </div>) : (
                        <table className="table table-striped table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.people.map(p => { return <PersonRow person={p} /> })}
                            </tbody>
                        </table>)}
            </div>
        </>
    }
}

export default PeopleTable;