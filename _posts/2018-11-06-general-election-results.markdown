---
layout: post
title: "2018 General Election Results"
date: 2018-11-06
published: true
excerpt_separator: <!--more-->

---
View the unofficial 2018 General Election Results for Shelby County.

<!--more-->

<div class="tab">
  <button class="tablinks" onclick="openRace(event, 'congress')" id="defaultOpen">4th Congressional</button>
  <button class="tablinks" onclick="openRace(event, 'statesenate')">State Senate</button>
  <button class="tablinks" onclick="openRace(event, 'statehouse')">State House</button>
  <button class="tablinks" onclick="openRace(event, 'circuitclerk')">Circuit Clerk</button>
  <button class="tablinks" onclick="openRace(event, 'sheriff')">Sheriff</button>
  <button class="tablinks" onclick="openRace(event, 'jailer')">Jailer</button>
  <button class="tablinks" onclick="openRace(event, '1magistrate')">1st District Magistrate</button>
  <button class="tablinks" onclick="openRace(event, '2magistrate')">2nd District Magistrate</button>
  <button class="tablinks" onclick="openRace(event, '5magistrate')">5th District Magistrate</button>
  <button class="tablinks" onclick="openRace(event, '6magistrate')">6th District Magistrate</button>
  <button class="tablinks" onclick="openRace(event, '7magistrate')">7th District Magistrate</button>
</div>

{% for office in site.data.generalresultseighteen %}
<div id="{{office.class}}" class="tabcontent">
<table class="race-results">
  <thead>
    <tr><th class="race-office" colspan="5">{{office.office}}</th></tr>
    <tr class="race-candidates">
      <th>Precinct</th>
      {% for candidate in office.candidates %}
      <th>{{ candidate.candidate }}</th>
      {% endfor %}
    </tr>
  </thead>
  <tbody>
    {% for precinct in office.precincts %}
      <tr>
      <td class="race-precinct">{{precinct.precinct}}</td>
      {% for vote in precinct.votes %}
      <td class="race-result">{{ vote.vote }}</td>
      {% endfor %}
      </tr>
    {% endfor %}
  </tbody>
</table>
</div>
{% endfor %}


<script>

document.getElementById("defaultOpen").click();

function openRace(evt, raceName){
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(raceName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
<style>
  .tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
  }

  .tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
  }

  .tab button:hover {
    background-color: #ddd;
  }

  .tab button.active {
    background-color: #ccc;
  }

  .tabcontent {
    display: none;
  }

  .race-office {
    font-weight: 700;
    text-decoration: underline;
  }

  .race-results {
    margin: 10px 0;
  }

  .race-results thead {
    border-bottom: 1px solid black;
  }

  .race-precinct {
    text-align: left;
  }

  .race-result {
    text-align: center;
  }

  .race-results tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .race-candidates th{
    padding: 5px 10px 0px 10px;
  }
</style>
