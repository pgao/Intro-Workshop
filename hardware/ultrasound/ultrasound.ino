#include <Ultrasonic.h>
  
  int TriggerP = 12; // Trigger Pin for Sensor
  int EchoP = 11; // Echo Pin for Sensor
     
  Ultrasonic ultrasonic(TriggerP,EchoP);   
   
  void setup() {
    Serial.begin(9600);
  }

  void loop() {
    Serial.println(ultrasonic.Ranging(CM)); // Get Range in Centimetres
    delay(500);
  }
