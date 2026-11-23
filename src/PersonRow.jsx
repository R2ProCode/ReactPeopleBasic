import React from "react";

class PersonRow extends React.Component {

    getClassName = (person) => {
        return +person.age > 65 ? "table-danger" : "";
    }

    render() {
        const { person } = this.props;

        return (
            <tr className={this.getClassName(person)}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
            </tr>
        );
    }
}

export default PersonRow;