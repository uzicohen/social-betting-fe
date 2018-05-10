import React from 'react';

export default class MainTemplate extends React.Component {
    render() {

        const Home = () => <Col sm={9} sm-offset={3} md={10} md-offset={2}><p>Home!</p></Col>;
        const Tournament1 = () => <Tournament name="Tornament1" />;
        const Tournament2 = () => <Tournament name="Tornament2" />;
        const Tournament3 = () => <Tournament name="Tornament3" />;
        const NewTournament = () => <p>New Tournament</p>;
        const Contact = () => <p>Contact!</p>;

        return (
            <div>
                <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">Top navbar</a>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline mt-2 mt-md-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" />>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <div class="container">
                    <div class="jumbotron">
                        <h1>Navbar example</h1>
                        <p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                        <a class="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
                    </div>
                </div>
            </div>
        );
    }
}