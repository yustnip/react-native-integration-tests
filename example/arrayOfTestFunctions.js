import { NativeModules } from 'react-native'
import ReactNativeInAppTesting from 'react-native-in-app-testing'
const { it, connectModule } = ReactNativeInAppTesting 
import { expect } from 'chai'

const SomeNativeModule = connectModule( NativeModules.SomeNativeModule )

export const arrayOfTestFunctions = [
    it( 'returnArray() should return an array', () => {
        return new Promise( ( resolve, reject ) => {
            SomeNativeModule.returnArray( ( response ) => {
                try {
                    expect( response ).to.be.instanceof( Array )
                    resolve()
                } catch ( error ) {
                    reject( error )
                }
            }
            )
        } )
    } ),
    
    it( 'first element of returnArray() response should be a string', () => {
        return new Promise( ( resolve, reject ) => {
            SomeNativeModule.returnArray( ( response ) => {
                try {
                    expect( response[ 0 ] ).to.be.a( 'string' )
                    resolve()
                } catch ( error ) {
                    reject( error )
                }
            }
            )
        } )
    } )
]
