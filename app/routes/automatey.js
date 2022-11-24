module.exports = {
    method: 'GET',
    path: '/automatey',
    handler: (_request, h) => {
      return h.view('automatey')
    }
  }
  
  // {# graph LR;
  //   S-->Requirement Identification;
  //   Requirement Identification-->BA Analysis;
  //   BA Analysis-->Ticket Created;
  //   Ticket Created-->Three Amigos;
  //   Three Amigos-->Backlog Refinement;
  //   Backlog Refinement-->Dev;
  //   Dev-->Test;
  //   Test-->Deploy;
  //   Deploy-->E;
  //   style S fill:#3CB043, stroke:#234F1E, stroke-width:2px;
  //   style E fill:#3CB043, stroke:#234F1E, stroke-width:2px;
  //   {# style C fill:#3CB043, stroke:#234F1E, stroke-width:2px; #}
  //   {# style D fill:#e90b0f, stroke:#234F1E, stroke-width:2px; #}
  //   {# click D 'https://laughingsquid.com/wp-content/uploads/2017/10/two-clowns-face-off-in-an-over-the-top-battle-at-a-kids-birthday-party.gif?w=750'; #}
     