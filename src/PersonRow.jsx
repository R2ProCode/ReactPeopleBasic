import React from "react";

class PersonRow extends React.Component {

    getClassName = (person) => {
        return Number(person.Age) > 65 ? "text-danger" : "";
    }

    render() {
        const { person } = this.props;

        return (
            <tr className={this.getClassName(person)}>
                <td>{person.FirstName}</td>
                <td>{person.LastName}</td>
                <td>{person.Age}</td>
            </tr>
        );
    }
}

export default PersonRow;