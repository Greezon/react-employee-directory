import Axios from "axios"
import React from "react"

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
				this.setState(employeeList)
				console.log(employeeList)
			})

	}
	render() {
		return (
			<div>
				<h1>employeeList</h1>
			</div>
		)
	}
}

export default Body;