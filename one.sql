DROP TABLE IF EXISTS dogActivities;
DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS activities;
DROP TABLE IF EXISTS activitiesLookUp;
DROP TABLE IF EXISTS customersAddress;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS stays;
DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    dogID INT AUTO_INCREMENT, 
    dogName VARCHAR(255) NOT NULL,
    age INT,
    breed VARCHAR(255) NOT NULL,
    PRIMARY KEY (dogID)
);

CREATE TABLE stays (
    stayID INT AUTO_INCREMENT,
    dogID INT,
    overnight BOOLEAN NOT NULL, 
    duration INT, 
    stayStart DATE NOT NULL,
    stayEnd DATE, 
    stayCost INT,
    PRIMARY KEY (stayID),
    FOREIGN KEY (dogID) REFERENCES dogs(dogID)
);

CREATE TABLE customers (
    customerID INT AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(25) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (customerID)
);

CREATE TABLE customersAddress (
    customerID INT,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zipcode VARCHAR(255) NOT NULL,
    FOREIGN KEY (customerID) REFERENCES customers(customerID)
);

CREATE TABLE owners (
    customerID INT, 
    dogID INT,
    FOREIGN KEY (customerID) REFERENCES customers(customerID),
    FOREIGN KEY (dogID) REFERENCES dogs(dogID)
);


CREATE TABLE activitiesLookUp (
    activityLookUpID INT AUTO_INCREMENT,
    activityName VARCHAR(255) NOT NULL,
    activityCap INT NOT NULL,
    activityCost INT NOT NULL, 
    location VARCHAR(255),
    activityDescription VARCHAR(255) NOT NULL,
    PRIMARY KEY (activityLookUpID)
);

CREATE TABLE activities (
    activityID INT AUTO_INCREMENT,
    activityLookUpID INT,
    activityDate DATE NOT NULL,
    activityTime Time (0) NOT NULL, 
    leadActivityCoordinator VARCHAR(255), 
    PRIMARY KEY (activityID),
    FOREIGN KEY (activityLookUpID) REFERENCES activitiesLookUp(activityLookUpID)
) ;

CREATE TABLE dogActivities (
    dogID INT, 
    activityID INT, 
    FOREIGN KEY (dogID) REFERENCES dogs(dogID),
    FOREIGN KEY (activityID) REFERENCES activities(activityID)
);

-- Insert data

-- Dogs
INSERT INTO dogs VALUES(NULL,'Gooby', 13, 'dachshund');
INSERT INTO dogs VALUES(NULL,'Spot', 4, 'black and tan coonhound');
INSERT INTO dogs VALUES(NULL,'Happy', 3, 'retriever mix');

-- Stays
INSERT INTO stays VALUES(NULL, (Select dogID from dogs where dogName = 'Gooby'), 0, 1, NOW(), NOW() + INTERVAL 1 DAY, 78);
INSERT INTO stays VALUES(NULL, (Select dogID from dogs where dogName = 'Spot'), 0, 4, NOW(), NOW() + INTERVAL 4 DAY, 256);
INSERT INTO stays VALUES(NULL, (Select dogID from dogs where dogName = 'Happy'), 0, 0, NOW(), NOW() + INTERVAL 0 DAY, 28);

-- Customers
INSERT INTO customers VALUES(NULL, 'Jackie', 'Valerdino', '713-556-2345', 'jvalerdino@gmail.com');
INSERT INTO customers VALUES(NULL, 'Max', 'Cinderblock', '344-226-2399', 'max1234@gmail.com');
INSERT INTO customers VALUES(NULL, 'Katie', 'MacIntyre', '662-256-2945', 'kMac28@gmail.com');

--  CustmersAddress
INSERT INTO customersAddress VALUES((SELECT customerID FROM customers WHERE firstName = 'Jackie' AND lastName = 'Valerdino'), '506 Cabrillo St.', 'Dallas', 'TX', '67853');
INSERT INTO customersAddress VALUES((SELECT customerID FROM customers WHERE firstName = 'Max' AND lastName = 'Cinderblock'), '78 Ingres Blvd.', 'Bend', 'OR', '99853');
INSERT INTO customersAddress VALUES((SELECT customerID FROM customers WHERE firstName = 'Katie' AND lastName = 'MacIntyre'), '34 Jupiter Ave.', 'Las Vegas', 'NV', '17422');

-- Owners
INSERT INTO owners VALUES((SELECT customerID FROM customers WHERE firstName = 'Jackie' AND lastName = 'Valerdino'),(Select dogID from dogs where dogName = 'Gooby'));
INSERT INTO owners VALUES((SELECT customerID FROM customers WHERE firstName = 'Max' AND lastName = 'Cinderblock'),(Select dogID from dogs where dogName = 'Spot'));
INSERT INTO owners VALUES((SELECT customerID FROM customers WHERE firstName = 'Katie' AND lastName = 'MacIntyre'),(Select dogID from dogs where dogName = 'Happy'));

-- ActivitiesLookUp
INSERT INTO activitiesLookUp (activityName, activityCap, activityCost, location, activityDescription) VALUES 
('Obedience Training', 1, '30', 'Room A', 'Learn sit, shake, down, roll over, and house breaking'),
('Grooming', 3, '50', 'Salon', 'Cut, shampoo, condition, and nail trim'), 
('Agility Training', 1, '25', 'Bark Park', 'Agility');

-- Activities
INSERT INTO activities (activityLookUpID, activityDate, activityTime, leadActivityCoordinator ) 
	VALUES ((SELECT activityLookUpID from activitiesLookUp WHERE activityName= 'Obedience Training'), '2020-07-31', '11:00', 'Ally Smith' );
INSERT INTO activities (activityLookUpID, activityDate, activityTime, leadActivityCoordinator ) 
	VALUES((SELECT activityLookUpID from activitiesLookUp WHERE activityName= 'Agility Training'),   '2020-07-31', '9:00',  'Billy Bob' );
INSERT INTO activities (activityLookUpID, activityDate, activityTime, leadActivityCoordinator ) 
	VALUES((SELECT activityLookUpID from activitiesLookUp WHERE activityName= 'Obedience Training'), '2020-08-01', '10:00', 'Ally Smith' );
INSERT INTO activities (activityLookUpID, activityDate, activityTime, leadActivityCoordinator ) 
	VALUES((SELECT activityLookUpID from activitiesLookUp WHERE activityName= 'Obedience Training'), '2020-08-01', '12:00', 'Rachel Crews' );
INSERT INTO activities (activityLookUpID, activityDate, activityTime, leadActivityCoordinator ) 
	VALUES((SELECT activityLookUpID from activitiesLookUp WHERE activityName= 'Grooming'), 		   '2020-08-01', '8:00', 'Susan Sharon' );

SELECT activities.activityID FROM activities
	INNER JOIN activitiesLookUp ON activities.activityLookUpID=activitiesLookUp.activityLookUpID
	WHERE activitiesLookUp.activityName='Obedience Training' AND activities.activityTime='11:00';

-- DogActivities
INSERT INTO dogActivities VALUES 
((Select dogID from dogs where dogName = 'Gooby'), (SELECT activities.activityID FROM activities
	INNER JOIN activitiesLookUp ON activities.activityLookUpID=activitiesLookUp.activityLookUpID
	WHERE activitiesLookUp.activityName='Obedience Training' AND activities.activityTime='11:00'
)),
((Select dogID from dogs where dogName = 'Gooby'), (SELECT activities.activityID FROM activities
	INNER JOIN activitiesLookUp ON activities.activityLookUpID=activitiesLookUp.activityLookUpID
	WHERE activitiesLookUp.activityName='Grooming' AND activities.activityTime='13:00'
)),
((Select dogID from dogs where dogName = 'Happy'), (SELECT activities.activityID FROM activities
	INNER JOIN activitiesLookUp ON activities.activityLookUpID=activitiesLookUp.activityLookUpID
	WHERE activitiesLookUp.activityName='Agility Training' AND activities.activityTime='9:00'
));