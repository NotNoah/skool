import * as React from 'react';
import './BoardList.css';
import FirebaseImage from './firebase/FirebaseImage';
export default class BoardList extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const employees = [
      {
        name: 'First Lase',
        image: 'First Lase.png',
        email: 'email@email.com',
        position: 'President',
        order: 1
      },

      {
        name: 'First Lase',
        image: 'First Lase.png',
        email: 'email@email.com',
        position: 'President',
        order: 1
      },
    ];
    return (
      <section id="team">
        <div className="container">
          <div className="row mtli-row-clearfix">
            {employees.map(employee => {
              return (
                <div
                  className="col-xs-12 col-sm-6 col-md-4 sm-text-center mb-30 mb-sm-30"
                  key={employee.email}
                >
                  <div className="team-member maxwidth400">
                    <div className="thumb">
                      <FirebaseImage
                        path={'board/' + employee.image}
                        width={225}
                      />
                    </div>
                    <div className="details">
                      <h3 className="text-uppercase mb-0">
                        <a>{employee.name}</a>
                      </h3>
                      <h5 className="text-theme-colored2 mt-0">
                        {employee.position}
                      </h5>
                      <ul className="styled-icons icon-dark">
                        {employee.email && (
                          <li>
                            <a
                              href={'mailto:' + employee.email}
                              style={{ backgroundColor: '#02B0E8' }}
                            >
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
