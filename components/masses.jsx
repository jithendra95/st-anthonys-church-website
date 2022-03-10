import React from "react";

export default function AppMass({ massSchedule }){
  const renderMasses = (massess) => {
    return massess?.map((mass, i) => {
      return (
        <div key={mass.name+"_"+i}>
          {mass.name?(<h3>
            <a href="#daily" id="daily">
              {mass.name}
            </a>
          </h3>) :([])}

          <div className="sub-items">
            <div className="row">
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                {mass.maharagama?.length > 0 ? (
                  <>
                    <h4>St Mary's Church Maharagama</h4>
                    <ul>
                      {mass.maharagama.map((mahMass, j) => {
                        return <li>{mahMass}</li>;
                      })}
                    </ul>
                  </>
                ) : (
                  []
                )}
              </div>
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                {mass.boralesgamuwa?.length > 0 ? (
                  <>
                    <h4>St Anthony's Church Boralesgamuwa</h4>
                    <ul>
                      {mass.boralesgamuwa.map((borMass, j) => {
                        return <li>{borMass}</li>;
                      })}
                    </ul>
                  </>
                ) : (
                  []
                )}
              </div>
              <div />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="fh5co-events">
      {massSchedule?.map((schedule, i) => {
        return (
          <div className="events-entry" key={`main_${i}`}>
            <div className="row animate-box">
              <div className="col-sm-6 col-sm-offset-3 text-center fh5co-heading">
                <h2>{schedule.header}</h2>
                <p>Updated {schedule.updatedDate}</p>
              </div>
            </div>

            {renderMasses(schedule.massess)}

            {/* <hr /> */}
          </div>
        );
      })}
    </div>
  );
}
