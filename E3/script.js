document.addEventListener("DOMContentLoaded", function () {
    function loadXMLData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "employees.xml", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const xmlDoc = xhr.responseXML;

                const employees = xmlDoc.getElementsByTagName("employee");
                const tableBody = document.querySelector("#employeeTable tbody");

                for (let i = 0; i < employees.length; i++) {
                    const employee = employees[i];

                    const id = employee.getAttribute("id");
                    const firstname = employee.getElementsByTagName("firstname")[0].textContent;
                    const lastname = employee.getElementsByTagName("lastname")[0].textContent;
                    const title = employee.getElementsByTagName("title")[0].textContent;
                    const division = employee.getElementsByTagName("division")[0].textContent;
                    const building = employee.getElementsByTagName("building")[0].textContent;
                    const room = employee.getElementsByTagName("room")[0].textContent;
                    const des = employee.getElementsByTagName("des")[0].textContent.trim();

                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${id}</td>
                        <td>${firstname}</td>
                        <td>${lastname}</td>
                        <td>${title}</td>
                        <td>${division}</td>
                        <td>${building}</td>
                        <td>${room}</td>
                        <td>${des}</td>
                    `;

                    tableBody.appendChild(row);
                }
            } else {
                console.error("Failed to load XML file");
            }
        };

        xhr.onerror = function () {
            console.error("Error occurred during the XMLHttpRequest");
        };

        xhr.send();
    }

    loadXMLData();
});
