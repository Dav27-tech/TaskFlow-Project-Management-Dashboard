import teamList from "../data/team_members";

export default function Team() {
  return (
    <div className="container mt-4">
      <h1>Team Members</h1>
      <div className="row">
        {teamList.map((member) => (
          <div key={member.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={member.avatar} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
                <p className="card-text text-muted">{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}