import Axios from "axios"
import React from "react"
import { MDBDataTable } from "mdbreact"

class Body extends React.Component {
	state = {
		employeeList: []
	}
	componentDidMount = () => {
		Axios.get("https://randomuser.me/api/?results=200&nat=us")
			.then((apiInsert) => {
				console.log(apiInsert)
				const mainList = apiInsert.data.results
				const employeeList = []
				for (let i = 0; i < mainList.length; i++) {
					const element = {
						firstName: mainList[i].name.first,
						lastName: mainList[i].name.last,
						city: mainList[i].location.city,
						state: mainList[i].location.state,
						email: mainList[i].email,
						phone: mainList[i].phone
					};
					employeeList.push(element)

				}
				this.setState({ employeeList: employeeList }, () => {
					console.log(this.state.employeeList)
				})
			})

	}
	render() {
		const dataTable = {
			columns: [
				{
					label: "First Name",
					field: "firstName"
				},
				{
					label: "Last Name",
					field: "lastName"
				},
				{
					label: "City",
					field: "city"
				},
				{
					label: "State",
					field: "state"
				},
				{
					label: "Email",
					field: "email"
				},
				{
					label: "Phone",
					field: "phone"
				}
			],
			rows: this.state.employeeList
		}
		return (

			<div>
				<MDBDataTable data={dataTable} />
			</div>
		)
	}
}

export default Body;
