export default class Content {
    
    private temperature: string ="0";
    private luminosity: string = "0";
    private humidity: string  = "0";
    
	constructor($temperature: string, $luminosity: string, $humidity: string ) {
        this.temperature = $temperature;
        this.luminosity = $luminosity;
        this.humidity = $humidity;
    }

    /**
     * Getter $temperature
     * @return {string }
     */
	public get $temperature(): string  {
		return this.temperature;
	}

    /**
     * Setter $temperature
     * @param {string } value
     */
	public set $temperature(value: string ) {
		this.temperature = value;
    }

    /**
     * Getter $luminosity
     * @return {string }
     */
	public get $luminosity(): string  {
		return this.luminosity;
	}

    /**
     * Setter $luminosity
     * @param {string } value
     */
	public set $luminosity(value: string ) {
		this.luminosity = value;
	}
    

    /**
     * Getter $humidity
     * @return {string  }
     */
	public get $humidity(): string   {
		return this.humidity;
	}

    /**
     * Setter $humidity
     * @param {string  } value
     */
	public set $humidity(value: string  ) {
		this.humidity = value;
	}

    
}