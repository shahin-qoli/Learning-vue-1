<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Save & Load
                    </a>
                    <ul class="dropdown-menu">
                        <li >
                            <a>Save Data</a>
                        </li>
                        <li >
                            <a>Load Data</a>
                        </li>
                    </ul>
                </li>
            </ul>    
        </div>
    </div>
  </nav>
</template>