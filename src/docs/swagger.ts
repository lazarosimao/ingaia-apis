const swagger = {
  "/api/v1/square-meter-value": {
    "get": {
      "tags": ["Square Meter Value"],
      "description": "Get square meter value",
      "parameters": [],
      "responses": {
        "200": {
          "description": "The value was obtained",
          "content": {
            "application/json": {
              "schemas": {
                "squareMeter": {
                  "properties": {
                    "payload": {
                      "type": "integer"
                    }
                  }
                }
              },
              "example": {
                "statusCode": "number",
                "message": "string",
                "payload": "number"
              }
            }
          }
        }
      }
    }
  },
  "/api/v1/property-value": {
    "post": {
      "tags": ["Property Value"],
      "description": "Calculate the property value",
      "requestBody": {
        "description": "You must inform the square meter of the property",
        "required": true,
        "content": {
          'application/json': {
            "schema": {
              "type": 'object',
              "properties": {
                "m2": {
                  "type": "integer"
                }
              },
            }
          }
        }
      },
      "parameters": [],
      "responses": {
        "200": {
          "description": "Calculation of the property value obtained",
          "content": {
            "application/json": {
              "schemas": {
                "user": {
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "name": {
                      "type": "string"
                    }
                  }
                }
              },
              "example": {
                "statusCode": "number",
                "message": "string",
                "payload": {
                  "m2": "number",
                  "valueM2": "number",
                  "propertyPrice": "number"
                }
              }
            }
          }
        }
      }
    }
  }
};

export default swagger;
