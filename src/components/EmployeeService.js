const EmployeeService = {
    async getEmployees() {
        const resp = await fetch("https://yrgo-web-services.netlify.app/bookings")
        if(resp.ok) {
            const data = await resp.json()
            return data
        }
    }
}
Object.freeze(EmployeeService)

export default EmployeeService