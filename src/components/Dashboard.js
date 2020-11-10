import React, { Fragment } from 'react';

class Dashboard extends React.Component {
    render() {

        return <>

            <h1>Dashboard</h1>
            <button><a href="index.html">Home</a></button>
            <form id="search-form">
                <label for="search" id="search-label">Search by Brand Name...</label>
                <input type="text" name="med-search" id="med-search" onfocus="this.value=''" />
                <button type="submit" name="med-submit" id="med-submit">Search</button>
            </form>

            <form id="generic-search-form">
                <label for="generic-search" id="generic-search-label">Search by Generic Name...</label>
                <input type="text" name="generic-med-search" id="generic-med-search" onfocus="this.value=''" />
                <button type="submit" name="generic-med-submit" id="generic-med-submit">Search</button>
            </form>

            <section id="search-results">
                <ul id="med-list"></ul>
            </section>
        </>

    }
}
export default Dashboard;