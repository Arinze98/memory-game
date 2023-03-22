function Rights() {
    const date = new Date().toLocaleString('eng', {
        year: 'numeric'
})

    return (
        <main>
            <footer>
                <p>[Footer: Copyright © <span>{date}</span> Memory Master. All rights reserved. Privacy Policy | Terms of Service]</p>
            </footer>
        </main>
    )
}


export default Rights;