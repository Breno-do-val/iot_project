export default class Content {
    
    private temperature: string ="0";
    private luminosity: string = "0";
    
	constructor($temperature: string, $luminosity: string ) {
        this.temperature = $temperature;
        this.luminosity = $luminosity;
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
    
    
}